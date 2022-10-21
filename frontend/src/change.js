<body>

  {/* <!-- ======= Header ======= --> */}
  <header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        <span className="d-none d-lg-block">KEYSTONE GLOBAL</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn"></i>
    </div>
    {/* <!-- End Logo --> */}

    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
      </form>
    </div>
    {/* <!-- End Search Bar --> */}

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">

        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="#">
            <i className="bi bi-search"></i>
          </a>
        </li>
        {/* <!-- End Search Icon--> */}

        <li className="nav-item dropdown">

          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">4</span>
          </a>
          {/* <!-- End Notification Icon --> */}

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

          </ul>
          {/* <!-- End Notification Dropdown Items --> */}

        </li>
        {/* <!-- End Notification Nav --> */}

        <li className="nav-item dropdown">

          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text"></i>
            <span className="badge bg-success badge-number">3</span>
          </a>
          {/* <!-- End Messages Icon --> */}

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
                {/* <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle"/> */}
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
                {/* <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle"> */}
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              {/* <hr className="dropdown-divider"> */}
            </li>

            <li className="message-item">
              <a href="#">
                {/* <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle"> */}
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              {/* <hr className="dropdown-divider"> */}
            </li>

            <li className="dropdown-footer">
              <a href="#">Show all messages</a>
            </li>

          </ul>
          {/* <!-- End Messages Dropdown Items --> */}

        </li>
        {/* <!-- End Messages Nav --> */}

        <li className="nav-item dropdown pe-3">

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"> */}
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
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>

          </ul>
          {/* <!-- End Profile Dropdown Items --> */}
        </li>
        {/* <!-- End Profile Nav --> */}

      </ul>
    </nav>
    {/* <!-- End Icons Navigation --> */}

  </header>
  {/* <!-- End Header --> */}

  {/* <!-- ======= Sidebar ======= --> */}
  <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <a className="nav-link collapsed" href="index.html">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      {/* <!-- End Dashboard Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="components-alerts.html">
              <i className="bi bi-circle"></i><span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-circle"></i><span>Accordion</span>
            </a>
          </li>
          <li>
            <a href="components-badges.html">
              <i className="bi bi-circle"></i><span>Badges</span>
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
      </li>
      {/* <!-- End Components Nav --> */}

      <li className="nav-item">
        <a className="nav-link " data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" className="nav-content collapse show" data-bs-parent="#sidebar-nav">
          <li>
            <a href="forms-elements.html">
              <i className="bi bi-circle"></i><span>Form Elements</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html" className="active">
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
      </li>
      {/* <!-- End Forms Nav --> */}

      <li className="nav-item">
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
      </li>
      {/* <!-- End Tables Nav --> */}

      <li className="nav-item">
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
      </li>
      {/* <!-- End Charts Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
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
      </li>
      {/* <!-- End Icons Nav --> */}

      <li className="nav-heading">Pages</li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="users-profile.html">
          <i className="bi bi-person"></i>
          <span>Profile</span>
        </a>
      </li>
      {/* <!-- End Profile Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-faq.html">
          <i className="bi bi-question-circle"></i>
          <span>F.A.Q</span>
        </a>
      </li>
      {/* <!-- End F.A.Q Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-contact.html">
          <i className="bi bi-envelope"></i>
          <span>Contact</span>
        </a>
      </li>
      {/* <!-- End Contact Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-register.html">
          <i className="bi bi-card-list"></i>
          <span>Register</span>
        </a>
      </li>
      {/* <!-- End Register Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-login.html">
          <i className="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </a>
      </li>
      {/* <!-- End Login Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-error-404.html">
          <i className="bi bi-dash-circle"></i>
          <span>Error 404</span>
        </a>
      </li>
      {/* <!-- End Error 404 Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-blank.html">
          <i className="bi bi-file-earmark"></i>
          <span>Blank</span>
        </a>
      </li>
      {/* <!-- End Blank Page Nav --> */}

    </ul>

  </aside>
  {/* <!-- End Sidebar--> */}

  <main id="main" className="main">

    <div className="pagetitle">
      <h1>Form Layouts</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item">Forms</li>
          <li className="breadcrumb-item active">Layouts</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}
    <section className="section">
      <div className="row">
        <div className="col-lg-6">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Horizontal Form</h5>

              {/* <!-- Horizontal Form --> */}
              <form>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Your Name</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputText"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword"/>
                  </div>
                </div>
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                      <label className="form-check-label" for="gridRadios1">
                        First radio
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                      <label className="form-check-label" for="gridRadios2">
                        Second radio
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                      <label className="form-check-label" for="gridRadios3">
                        Third disabled radio
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="row mb-3">
                  <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                      <label className="form-check-label" for="gridCheck1">
                        Example checkbox
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </form>
              {/* <!-- End Horizontal Form --> */}

            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Multi Columns Form</h5>

              {/* <!-- Multi Columns Form --> */}
              <form className="row g-3">
                <div className="col-md-12">
                  <label for="inputName5" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="inputName5"/>
                </div>
                <div className="col-md-6">
                  <label for="inputEmail5" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail5"/>
                </div>
                <div className="col-md-6">
                  <label for="inputPassword5" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword5"/>
                </div>
                <div className="col-12">
                  <label for="inputAddress5" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddres5s" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                  <label for="inputAddress2" className="form-label">Address 2</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">State</label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label for="inputZip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </form>
              {/* <!-- End Multi Columns Form --> */}

            </div>
          </div>

        </div>

        <div className="col-lg-6">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Vertical Form</h5>

              {/* <!-- Vertical Form --> */}
              <form className="row g-3">
                <div className="col-12">
                  <label for="inputNanme4" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="inputNanme4"/>
                </div>
                <div className="col-12">
                  <label for="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-12">
                  <label for="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </form>
              {/* <!-- Vertical Form --> */}

            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">No Labels / Placeholders as labels Form</h5>

              {/* <!-- No Labels Form --> */}
              <form className="row g-3">
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="Your Name"/>
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="col-md-6">
                  <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="col-12">
                  <input type="text" className="form-control" placeholder="Address"/>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="City"/>
                </div>
                <div className="col-md-4">
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <input type="text" className="form-control" placeholder="Zip"/>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </form>
              {/* <!-- End No Labels Form --> */}

            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Floating labels Form</h5>

              {/* <!-- Floating Labels Form --> */}
              <form className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="floatingName" placeholder="Your Name"/>
                    <label for="floatingName">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="floatingEmail" placeholder="Your Email"/>
                    <label for="floatingEmail">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Address" id="floatingTextarea" style="height: 100px;"></textarea>
                    <label for="floatingTextarea">Address</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="floatingCity" placeholder="City"/>
                      <label for="floatingCity">City</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-3">
                    <select className="form-select" id="floatingSelect" aria-label="State">
                      <option selected>New York</option>
                      <option value="1">Oregon</option>
                      <option value="2">DC</option>
                    </select>
                    <label for="floatingSelect">State</label>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="floatingZip" placeholder="Zip"/>
                    <label for="floatingZip">Zip</label>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </form>
              {/* <!-- End floating Labels Form --> */}

            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
  {/* <!-- End #main --> */}



  

</body>