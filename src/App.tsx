import { useState } from "react";
import "./App.css";
import PageEditor from "./Components/PageEditor";
import TableOfContents from "./Components/TableofContents";
import PageContent from "./Components/PageContents";

interface Page {
  id: string;
  text: string;
  code?: string;
  font: string;
  fontSize: number;
  thumbnail?: string;
}
function App() {
  const [pages, setPages] = useState<Page[]>([]);

  const handleCreatePage = (page: any) => {
    setPages([...pages, page]);
  };

  return (
    <div>
      <h1>Mini Power Point</h1>

      <PageEditor onCreate={handleCreatePage} />

      <TableOfContents pages={pages} />

      {pages.map((page, index) => (
        <PageContent key={index} {...page} />
      ))}
    </div>
  );
}

export default App;
