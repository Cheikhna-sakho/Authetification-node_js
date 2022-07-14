import Layout from '../template/Layout';

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user["firstname"]);
  return <Layout content={
    <div className='center'>
      <p style={{textAlign: "center"}}>Bienvenu <span style={{ color: 'black' }}>{user.firstname}</span></p>
    </div>
  } />
}

export default Home