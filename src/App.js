import Card from "./Card";

function App() {
  // const allData = ["First Card", "Second Card", "Third Card"];

  const allData = [
    {
      title: "First Card",
      subtitle: "First card subtitle",
    },

    {
      title: "Second Card",
      subtitle: "Second card subtitle",
    },

    {
      title: "Third Card",
      subtitle: "Third card subtitle",
    },
  ];

  return (
    <div className="container py-5">
      {allData.map((data) => {
        return <Card title={data.title} subtitle={data.subtitle} />;
      })}
    </div>
  );
}

export default App;
