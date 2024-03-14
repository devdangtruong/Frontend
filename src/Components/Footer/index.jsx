import React from "react";

function Footer() {
  const footer = [
    {
      title: "Chính sách bán hàng",
      content: "Chính sách bảo hành",
      contenttwo: "Chính sách mua hàng Online",
      contentthree: "Chính sách bảo mật thông tin khách hàng",
      contentfour: "",
    },
    {
      title: "Tổng đài hỗ trợ",
      content: "Hotline bán hàng",
      contenttwo: "Hotline bảo hành, kỹ thuật",
      contentthree: "Hotline hỗ trợ phần mềm",
      contentfour: "Hotline phản ánh chất lượng dịch vụ",
    },
    {
      title: "Khu vực",
      content: "Miền Bắc",
      contenttwo: "Miền Trung",
      contentthree: "Miền Nam",
      contentfour: "",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    >
      {footer.map((content, i) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
          key={i}
        >
          <h3>{content.title}</h3>
          <div>{content.content}</div>
          <div>{content.contenttwo}</div>
          <div>{content.contentthree}</div>
          <div>{content.contentfour}</div>
        </div>
      ))}
    </div>
  );
}

export default Footer;
