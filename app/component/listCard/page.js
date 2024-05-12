import React, { useState, useEffect } from "react";
import CardNews from "../additional/card/page";
import { Button, Input, InputGroup, Label } from "reactstrap";

const ListCard = (args) => {
  const [page, setPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchDate, setSearchDate] = useState("");

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>NEWS</h1>
      <InputGroup>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "1rem",
          }}
        >
          <Label>Filter by Title</Label>
          <Input
            placeholder="Filter by Title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>Filter by Date</Label>
          <Input
            name="date"
            placeholder="Filter by Date"
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
      </InputGroup>

      <CardNews page={page} searchTitle={searchTitle} searchDate={searchDate} setPage={setPage} />
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        <Button color="light" onClick={handlePrevPage} disabled={page === 1}>
          Previous Page
        </Button>
        <Button color="light" onClick={handleNextPage}>
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default ListCard;
