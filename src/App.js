import Content from './component/Content';
import Head from './component/Head';

function App() {
  const items = [{
    name: "Địa điểm nổi tiếng",
    free: true
  },
  {
    name: "Điểm đến yêu thích",
    free: false
  },
  {
    name: "Địa danh bình chọn",
    free: true
  }
];
const element = items.map(
  (item, index) => <Content key = {index} name={item.name} free = {item.free}/>

);
  return (
    <>
    <Head/>
    {element}
    </>
  );
}

export default App;
