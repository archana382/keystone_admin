// import logo from '../public/img/logo.png';
// import message1 from '../public/img/messages-1.jpg';
// import message2 from '../public/img/messages-2.jpg';
// import message3 from '../public/img/messages-3.jpg';

// import profile from '../public/img/profile-img.jpg';
import { Fragment } from "react";
import './dashboard.css';
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../action/userAction";

const Dashboard = ( ) => {

    const { user } = useSelector((state) => state.user);

    const alert = useAlert();
    const dispatch = useDispatch();

    function logoutUser() {
        dispatch(logout());
        alert.success("Logout Successfully");
    }
  return (
   
    <Fragment>
    <div className = "dashboard">
        <body>
        <header id="header" className="header fixed-top d-flex align-items-center">

        <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
            
            {/* <img src={logo}  className = "App-logo" alt="logo"/> */}
            
            {/* <img src="assets/img/logo.png" alt=""> */}
            <span className="d-none d-lg-block">KEYSTONE GLOBAL</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        <div className="search-bar">
        <form className="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
        </form>
        </div>

        <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">

            <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
            </a>
            </li>

            <li className="nav-item dropdown">

            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                You have 4 new notifications
                <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                </div>
                </li>

                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li className="notification-item">
                <i className="bi bi-x-circle text-danger"></i>
                <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                </div>
                </li>

                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li className="notification-item">
                <i className="bi bi-check-circle text-success"></i>
                <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                </div>
                </li>

                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li className="notification-item">
                <i className="bi bi-info-circle text-primary"></i>
                <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                </div>
                </li>

                <li>
                <hr className="dropdown-divider"/>
                </li>
                <li className="dropdown-footer">
                <a href="#">Show all notifications</a>
                </li>

            </ul>=

            </li>=

            <li className="nav-item dropdown">

            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
            </a>=

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                You have 3 new messages
                <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li className="message-item">
                <a href="#">
                    {/* <img src={message1} alt="" className="rounded-circle"/> */}
                    <div>
                    <h4>Maria Hudson</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                    <p>4 hrs. ago</p>
                    </div>
                </a>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li className="message-item">
                <a href="#">
                    {/* <img src={message2} alt="" className="rounded-circle"/> */}
                    <div>
                    <h4>Anna Nelson</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                    <p>6 hrs. ago</p>
                    </div>
                </a>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li className="message-item">
                <a href="#">
                    {/* <img src={message3} alt="" className="rounded-circle"/> */}
                    <div>
                    <h4>David Muldon</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                    <p>8 hrs. ago</p>
                    </div>
                </a>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li className="dropdown-footer">
                <a href="#">Show all messages</a>
                </li>

            </ul>

            </li>
             {/* End Messages Nav  */}

            <li className="nav-item dropdown pe-3">

            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                {/* <img src={profile} alt="Profile" className="rounded-circle"/> */}
                <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
            </a>
            {/* <!-- End Profile Iamge Icon --> */}

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li>
                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                </a>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li>
                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                </a>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li>
                <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                </a>
                </li>
                <li>
                <hr className="dropdown-divider"/>
                </li>

                <li>
                <a className="dropdown-item d-flex align-items-center" href="/" onSubmit={logoutUser}>
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                </a>
                </li>

                

            </ul>
            </li>
        </ul>
        </nav>

        </header>

                {/* <!-- ======= Sidebar ======= --> */}
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
                <a className="nav-link " href="/dashboard">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
                </a>
            </li>
            {/* <!-- End Dashboard Nav --> */}

            {/* <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-menu-button-wide"></i><span>Import From Excel</span><i className="bi bi-chevron-down ms-auto" href="/import"></i>
                </a>
                <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="components-alerts.html">
                    <i className="bi bi-circle"></i><span>New Student from Call Center</span>
                    </a>
                </li>
                <li>
                    <a href="components-accordion.html">
                    <i className="bi bi-circle"></i><span>Student Details</span>
                    </a>
                </li>
                <li>
                    <a href="components-badges.html">
                    <i className="bi bi-circle"></i><span>Completed</span>
                    </a>
                </li>
                <li>
                    <a href="components-breadcrumbs.html">
                    <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                    </a>
                </li>
                <li>
                    <a href="components-buttons.html">
                    <i className="bi bi-circle"></i><span>Buttons</span>
                    </a>
                </li>
                <li>
                    <a href="components-cards.html">
                    <i className="bi bi-circle"></i><span>Cards</span>
                    </a>
                </li>
                <li>
                    <a href="components-carousel.html">
                    <i className="bi bi-circle"></i><span>Carousel</span>
                    </a>
                </li>
                <li>
                    <a href="components-list-group.html">
                    <i className="bi bi-circle"></i><span>List group</span>
                    </a>
                </li>
                <li>
                    <a href="components-modal.html">
                    <i className="bi bi-circle"></i><span>Modal</span>
                    </a>
                </li>
                <li>
                    <a href="components-tabs.html">
                    <i className="bi bi-circle"></i><span>Tabs</span>
                    </a>
                </li>
                <li>
                    <a href="components-pagination.html">
                    <i className="bi bi-circle"></i><span>Pagination</span>
                    </a>
                </li>
                <li>
                    <a href="components-progress.html">
                    <i className="bi bi-circle"></i><span>Progress</span>
                    </a>
                </li>
                <li>
                    <a href="components-spinners.html">
                    <i className="bi bi-circle"></i><span>Spinners</span>
                    </a>
                </li>
                <li>
                    <a href="components-tooltips.html">
                    <i className="bi bi-circle"></i><span>Tooltips</span>
                    </a>
                </li>
                </ul>
            </li> */}
            {/* <!-- End Components Nav --> */}

            {/* <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-journal-text"></i><span>New Student From Call Center</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="forms-elements.html">
                    <i className="bi bi-circle"></i><span>Form Elements</span>
                    </a>
                </li>
                <li>
                    <a href="forms-layouts.html">
                    <i className="bi bi-circle"></i><span>Form Layouts</span>
                    </a>
                </li>
                <li>
                    <a href="forms-editors.html">
                    <i className="bi bi-circle"></i><span>Form Editors</span>
                    </a>
                </li>
                <li>
                    <a href="forms-validation.html">
                    <i className="bi bi-circle"></i><span>Form Validation</span>
                    </a>
                </li>
                </ul>
            </li> */}
            {/* <!-- End Forms Nav --> */}

            {/* <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="tables-general.html">
                    <i className="bi bi-circle"></i><span>General Tables</span>
                    </a>
                </li>
                <li>
                    <a href="tables-data.html">
                    <i className="bi bi-circle"></i><span>Data Tables</span>
                    </a>
                </li>
                </ul>
            </li> */}
            {/* <!-- End Tables Nav --> */}

            {/* <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="charts-chartjs.html">
                    <i className="bi bi-circle"></i><span>Chart.js</span>
                    </a>
                </li>
                <li>
                    <a href="charts-apexcharts.html">
                    <i className="bi bi-circle"></i><span>ApexCharts</span>
                    </a>
                </li>
                <li>
                    <a href="charts-echarts.html">
                    <i className="bi bi-circle"></i><span>ECharts</span>
                    </a>
                </li>
                </ul>
            </li> */}
            {/* <!-- End Charts Nav --> */}

            {/* <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-gem"></i><span>Student Details</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="icons-bootstrap.html">
                    <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                    </a>
                </li>
                <li>
                    <a href="icons-remix.html">
                    <i className="bi bi-circle"></i><span>Remix Icons</span>
                    </a>
                </li>
                <li>
                    <a href="icons-boxicons.html">
                    <i className="bi bi-circle"></i><span>Boxicons</span>
                    </a>
                </li>
                </ul>
            </li> */}
            {/* <!-- End Icons Nav --> */}


            {/* <li className="nav-heading">Completed</li> */}

            <li className="nav-item">
                <a className="nav-link collapsed" href="/import">
                <i className="bi bi-person"></i>
                <span>Import From Excel</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href="/new">
                <i className="bi bi-person"></i>
                <span>New Student from Call Center</span>
                </a>
            </li>
            {/* <!-- End Profile Page Nav --> */}

            <li className="nav-item">
                <a className="nav-link collapsed" href="/details">
                <i className="bi bi-question-circle"></i>
                <span>Student Details</span>
                </a>
            </li>
            {/* <!-- End F.A.Q Page Nav --> */}

            <li className="nav-item">
                <a className="nav-link collapsed" href="/completed">
                <i className="bi bi-envelope"></i>
                <span>Completed</span>
                </a>
            </li>
            {/* <!-- End Contact Page Nav --> */}
            
            <li className="nav-item">
                
                <a className="nav-link collapsed" href="/calendar">
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Calendar</span>
                </a>
                
            </li>
            {/* <!-- End Login Page Nav --> */}

            <li className="nav-item">
                <a className="nav-link collapsed" href="/uploadPDF">
                <i className="bi bi-card-list"></i>
                <span>Upload Document</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="/uploadDownload">
                <i className="bi bi-card-list"></i>
                <span>Upload Download</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="/add">
                <i className="bi bi-card-list"></i>
                <span>Add User</span>
                </a>
            </li>
            

           


            </ul>

        </aside>
        {/* <!-- End Sidebar--> */}

        {/* <main id="main" className="main">

            <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
            </div>
        </main> */}

        
    </body>
    </div>
    </Fragment>
  );
}

export default Dashboard;