"use client";
import React, { useState } from "react";
import LiveFeedHeader from "./LiveFeedHeader";
import LiveFeedGrid from "./LiveFeedGrid";

const LiveFeed = () => {
  const [paused, setPaused] = useState(false);
  const [feedFilter, setFeedFilter] = useState<"All" | "Free" | "Paid">("All");
  return (
    <div>
      <div className="mb-4">
        <LiveFeedHeader
          paused={paused}
          setPaused={setPaused}
          filter={feedFilter}
          setFilter={setFeedFilter}
        />
      </div>
      <LiveFeedGrid filter={feedFilter} />
    </div>
  );
};

export default LiveFeed;
