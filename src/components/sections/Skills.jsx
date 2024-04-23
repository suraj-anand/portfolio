// Logos
import htmlLogo from 'assets/images/logo/html-logo.png'
import cssLogo from 'assets/images/logo/css-logo.png'
import jsLogo from 'assets/images/logo/js-logo.png'
import bootstrapLogo from 'assets/images/logo/Bootstrap_logo.png'
import reactLogo from 'assets/images/logo/react-logo.png'
import pythonLogo from 'assets/images/logo/python-logo.png'
import djangoLogo from 'assets/images/logo/django-logo.png'
import linuxLogo from 'assets/images/logo/linux-logo.png'
import mongoLogo from 'assets/images/logo/mongodb-logo.png'
import postgresLogo from 'assets/images/logo/postgres-logo.png'
import gcloudLogo from 'assets/images/logo/google-cloud-logo.png'
import gitLogo from 'assets/images/logo/git-logo.png'

function Skills() {
  return (
    <>
      <div className="d-flex vh-100 align-items-center justify-content-center p-4"
        data-bs-spy="scroll" data-bs-target="#navbar" data-bs-smooth-scroll="true" tabindex="0">
        <section id="skills">
          <div className="container text-white">

            <div className="my-4">
              <p data-aos="fade-right" className='fw-bold fs-3 text-center mb-0'>Skills</p>
              <div className='my-0 h-line-1'></div>
            </div>

            <div className="row">
              <div className="col-12">
                {/* Skills */}
                <div className="icon-list-01" data-aos="flip-left" data-aos-duration="1000">
                  <img src={htmlLogo} alt="html" className="icon-img  p-2 mx-1" data-toggle="tooltip" data-placement="bottom" title="HTML" />
                  <img src={cssLogo} alt="css" className="icon-img  p-2 mx-1" data-toggle="tooltip" data-placement="bottom" title="CSS" />
                  <img src={jsLogo} alt="js" className="icon-img  p-1 mx-1" data-toggle="tooltip" data-placement="bottom" title="Javascript" />
                  <img src={bootstrapLogo} alt="" className="icon-img p-2 mx-1" data-toggle="tooltip" data-placement="bottom" title="Bootstrap" />
                  <img src={reactLogo} alt="" className="icon-img p-2 mx-1" data-toggle="tooltip" data-placement="bottom" title="ReactJS" />
                </div>

                <div className="icon-list-01" data-aos="flip-right" data-aos-duration="1000">
                  <img src={pythonLogo} alt="python" className="icon-img p-1 mx-1" data-toggle="tooltip" data-placement="bottom" title="Python" />
                  <img src={djangoLogo} alt="django" className="icon-img p-1 mx-1" data-toggle="tooltip" data-placement="bottom" title="Django" />
                  <img src={postgresLogo} alt="postgres" className="icon-img  mx-1 p-2 " data-toggle="tooltip" data-placement="bottom" title="postgreSQL" />
                  <img src={mongoLogo} alt="mongo-db" className="icon-img mx-1" data-toggle="tooltip" data-placement="bottom" title="MongoDB" />
                </div>


                <div className="icon-list-01" data-aos="flip-down" data-aos-duration="1000">
                  <img data-toggle="tooltip" data-placement="bottom" title="Google Cloud" src={gcloudLogo} alt="" className="icon-img  p-2 mx-1" />
                  <img data-toggle="tooltip" data-placement="bottom" title="Linux" src={linuxLogo} alt="" className="icon-img  p-2 mx-1" />
                  <img data-toggle="tooltip" data-placement="bottom" title="git" src={gitLogo} alt="" className="icon-img  p-2 mx-1" />
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Skills;
