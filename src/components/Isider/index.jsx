import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

function ISider() {
  return (
    <div className="sider">
      <div>
        <Link to='/app1'>React App 1</Link>
      </div>
      <div>
        <Link to='/app2'>React App 2</Link>
      </div>
    </div>
  )
}

export default withRouter(ISider)