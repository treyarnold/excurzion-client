import React from "react";
// import { Query } from "react-apollo";
// import gql from "graphql-tag";

import VideoLink from "../VideoLink/VideoLink";

import classes from "./VideoLinks.module.css";
import videos from "../../data";

// const feedQuery = gql`
//   {
//     feed {
//       id
//       description
//       title
//       thumbnail
//     }
//   }`;

const VideoLinks = () => (
  <section className={classes.section}>
    {/* <Query query={feedQuery}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>

        const linksToRender = data.feed
        console.log(linksToRender);
        return (
          <div className={classes.links}>
            {linksToRender.map(link => (<VideoLink key={link.id} data={link} />))}
          </div>
        )
      }}
    </Query> */}
    <div className={classes.links}>
      {videos.map((video, idx) => <VideoLink key={idx} id={idx} data={video} />)}
    </div>
  </section>
);

export default VideoLinks;