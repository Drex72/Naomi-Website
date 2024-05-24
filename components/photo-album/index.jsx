import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./style.css";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <img src="https://res.cloudinary.com/dinrq1kf4/image/upload/v1716504747/Screenshot_2024-05-23_at_23.46.32_nx9ncm.png"  alt="s"/>
      <p>Page number: {props.number}</p>
    </div>
  );
});

export function PhotoAlbum(props) {
  return (
   <div className="bg-white items-center justify-center">
     <HTMLFlipBook width={300} height={300} className="bg-white">
      <Page number="1">Page text</Page>
      <Page number="2">Page text</Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="5">Page text</Page>
      <Page number="6">Page text</Page>
      <Page number="7">Page text</Page>
    </HTMLFlipBook>
   </div>
  );
}
