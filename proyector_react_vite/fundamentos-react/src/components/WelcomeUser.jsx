const WelcomeUser = ({user})=>(user ? <div className="online"> <h2>OnLine</h2> </div>: <div className="offline"> <h2>OffLine</h2> </div>)
export default WelcomeUser