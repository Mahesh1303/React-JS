import "./App.css";
import Card from "./pages/cards";

function App() {
  const teamMember: {
    socialLinks: {
      github: string;
    };
  } = {
    socialLinks: { github: "https://github.com/Mahesh1303" },
  };
  // console.log(teamMember)
  // console.log(teamMember.socialLinks)

  return (
    <>
      <Card members={teamMember} />
    </>
  );
}

export default App;
