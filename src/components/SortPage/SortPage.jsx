import PageLayout from "../AlgoPageLayout/PageLayout.jsx";

// This page will create a binary tree using D3.js and then the user can choose to use BFS or DFS to find a target element
const SortPage = () => {
  const leftContent = (
    <>
      <h1>Sorting Algorithms</h1>
      <p>Description</p>
    </>
  );

  const rightContent = (
    <>
      <div>Right Content Test</div>
    </>
  );

  return <PageLayout leftContent={leftContent} rightContent={rightContent} />;
};

export default SortPage;
