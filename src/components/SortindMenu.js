import { useSearchParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

const SortingMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success">Sort:</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => setSearchParams({ sort_by: "created_at" })}
        >
          Newest Reviews
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() =>
            setSearchParams({ sort_by: "created_at", order: "asc" })
          }
        >
          Oldest Reviews
        </Dropdown.Item>

        <Dropdown.Item onClick={() => setSearchParams({ sort_by: "votes" })}>
          Most voted
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => setSearchParams({ sort_by: "votes", order: "asc" })}
        >
          Least voted
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() =>
            setSearchParams({ sort_by: "comment_count", order: "asc" })
          }
        >
          Least commented
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => setSearchParams({ sort_by: "comment_count" })}
        >
          Most commented
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortingMenu;
