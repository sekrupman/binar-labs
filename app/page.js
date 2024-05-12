'use client';

import Banner from "./component/banner/page";
import ListCard from "./component/listCard/page";
import MainTitle from "./component/mainTitle/pages";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import fetchNewsSources from "@/api/news";
import Footer from "./component/footer/page";


export default function Home() {
  const [newsSources, setNewsSources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sources = await fetchNewsSources();
      setNewsSources(sources);
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="title">
        <MainTitle />
      </div>
      <div>
      <Banner sources={newsSources} />
      </div>
      <div>
        <ListCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
