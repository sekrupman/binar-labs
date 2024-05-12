import React, { useState, useEffect } from "react";
import styles from './styles.module.css'
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
} from "react-bootstrap";
import ModalNews from "../modalNews/page";
import fetchNewsSources from "../../../../api/news";

const CardNews = ({ page, searchTitle, searchDate }) => {
  const [modal, setModal] = useState(false);
  const [newsSources, setNewsSources] = useState([]);
  const [selectedSource, setSelectedSource] = useState(null);
  const [filteredSources, setFilteredSources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNewsSources();
        setNewsSources(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredSources = newsSources.filter(source => {
      const titleMatch = source.title.toLowerCase().includes(searchTitle.toLowerCase());
      const dateMatch = source.publishedAt.includes(searchDate);
      return titleMatch && dateMatch;
    });
    setFilteredSources(filteredSources);
  }, [newsSources, searchTitle, searchDate]);

  useEffect(() => {
    renderNewsCards();
  }, [filteredSources, page]);

  const toggleModal = () => setModal(!modal);

  const handleCardClick = (source) => {
    setSelectedSource(source);
    toggleModal();
  };

  const renderNewsCards = () => {
    const startIndex = (page - 1) * 9;
    const endIndex = startIndex + 9;
    const pageSources = filteredSources.slice(startIndex, endIndex);
    return pageSources.map((source) => (
        <Card
          key={source.url}
          body
          color="light"
          outline
          style={{
            width: "18rem",
          }}
          onClick={() => handleCardClick(source)}
          >
          <img
            alt="Sample"
            src={source.urlToImage}
            style={{ height: "200px", width: "200px" }}
            />
          <CardBody>
            <CardTitle tag="h5" style={{ fontWeight: "700" }}>
              {source.title}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Author : {source.author}
            </CardSubtitle>
            <Button onClick={() => handleCardClick(source)}>Detail</Button>
          </CardBody>
        </Card>
    ));
  };

  return (
    <div>
    <div style={{ marginTop:'2rem',  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}>
      {renderNewsCards()}
      <ModalNews show={modal} onHide={toggleModal} source={selectedSource} />
    </div>
    </div>
  );
};

export default CardNews;
