import Animated from "components/animate-component";
import { Container } from "react-bootstrap";

const CorporateProjects = () => {
  const animateConfig = {
    initial: { transform: "translateY(50px)", opacity: 0 },
    whileInView: { transform: "translateY(0)", opacity: 1 },
  };

  return (
    <Container className="section corporate" id="NDA">
      <Animated animateConfig={animateConfig}>
        <div className="section-title">
          <h2>Corporate Projects (NDA Protected)</h2>
          <p>
            <em>
              Due to confidentiality agreements, detailed project showcases for
              these are not available online. However, I am happy to discuss my
              contributions and the technologies used in a professional setting.
            </em>
          </p>
        </div>
        <div className="corporate-projects">
          {/* Project 1 */}
          <h4 className="project-title">1. KPI School Performance System</h4>
          <p>
            <em>
              A comprehensive web application designed to track and analyze
              school performance metrics, improving data visualization and user
              experience for corporate stakeholders.
            </em>
          </p>

          <h5>Key Contributions:</h5>

          <h6>Developed Complex, Customizable Data Tables:</h6>
          <ul>
            <li>
              Built multiple feature-rich data tables with
              <strong> pagination, sorting, search, filtering</strong>, and
              <strong> Excel export</strong> functionalities using
              <strong> MUI Data Grid.</strong>
            </li>
            <li>
              Created a reusable base data table component using
              <strong> React and TypeScript</strong>, which was highly
              customizable and adaptable across the project.
            </li>
            <li>
              Overcame localization challenges for the Persian language by
              customizing MUI's default Persian localization to meet
              project-specific needs.
            </li>
            <li>
              Developed a robust, reusable <strong> utility function</strong> to
              format complex data types (objects, arrays, etc.) for Excel
              export, ensuring compatibility with Persian data and intricate
              structures. This function was later adapted for use in another
              project, highlighting its flexibility and efficiency.
            </li>
          </ul>

          <h6>Form Handling and Data Persistence:</h6>
          <ul>
            <li>
              Implemented complex KPI data entry forms using
              <strong> React Hook Form</strong> to manage form state
              efficiently.
            </li>
            <li>
              Integrated <strong> Redux Persist</strong> to ensure users did not
              lose progress while filling multi-step forms, enhancing the user
              experience.
            </li>
          </ul>

          <h6>UI/UX Implementation:</h6>
          <ul>
            <li>
              Collaborated closely with UI/UX designers to translate Figma
              designs into reusable UI components such as
              <strong> buttons, chips, labels, and layouts</strong>, maintaining
              design consistency across the application.
            </li>
            <li>
              Developed role-based layouts and access control for different user
              types (e.g., admin, branch managers, regional managers), ensuring
              appropriate content visibility and security.
            </li>
          </ul>

          <h6>Performance Optimization:</h6>
          <ul>
            <li>
              Utilized <strong> lazy loading, React Suspense</strong>, and
              performance optimization techniques such as useMemo and
              useCallback to reduce loading times and enhance application
              performance while maintaining code readability and scalability.
            </li>
            <li>
              Addressed optimization challenges in the data table filtering
              system by implementing a caching mechanism to avoid redundant
              server requests, improving response times and reducing server
              load.
            </li>
          </ul>

          <h6>Scalability and Maintainability:</h6>
          <ul>
            <li>
              Ensured adherence to coding best practices such as
              <strong>
                {" "}
                Separation of Concerns (SoC), DRY (Don't Repeat Yourself), and
                reusability
              </strong>
              , making the codebase scalable and maintainable.
            </li>
            <li>
              Structured the project’s file and folder organization to align
              with the company's standards, facilitating consistency across
              multiple projects.
            </li>
          </ul>

          <h6>Collaboration and Agile Development:</h6>
          <ul>
            <li>
              Worked in an agile environment using <strong> Trello</strong> to
              manage sprint-based tasks and time-based deliverables.
            </li>
            <li>
              Actively contributed to <strong> code review meetings</strong>,
              ensuring high code quality through Git-based version control and
              structured merge requests.
            </li>
            <li>
              Collaborated effectively with backend developers to integrate APIs
              using <strong> Swagger</strong>, ensuring smooth data flow and
              system interoperability.
            </li>
          </ul>
          <hr></hr>
          {/* Project 2 */}
          <h4 className="project-title">2. Meta EBR dApp</h4>
          <p>
            <em>
              A decentralized application (dApp) built to enhance transparency
              and trustworthiness by integrating blockchain functionalities into
              an existing legacy system.
            </em>
          </p>

          <h5>Key Contributions:</h5>

          <h6>Legacy Application Refactoring and Migration:</h6>
          <ul>
            <li>
              Led the gradual migration of a legacy jQuery-based application to
              a modern stack using{" "}
              <strong>React, Next.js, and TypeScript</strong>, significantly
              improving performance, maintainability, and scalability.
            </li>
            <li>
              Developed a phased approach by initially introducing React into
              the existing codebase and gradually converting jQuery and vanilla
              JavaScript modules to feature-based React components with
              TypeScript.
            </li>
            <li>
              Configured and utilized <strong>Webpack</strong> for module
              bundling and compilation, ensuring a seamless transition while
              maintaining ongoing feature development.
            </li>
            <li>
              Successfully migrated the project to{" "}
              <strong>Next.js with server components</strong>, drastically
              improving performance and optimizing rendering speed.
            </li>
          </ul>

          <h6>Blockchain Integration and API Development:</h6>
          <ul>
            <li>
              Developed a <strong>RESTful API</strong> using{" "}
              <strong>Node.js, Express, ethers.js, and web3.js</strong>,
              enabling seamless interaction with Ethereum smart contracts to
              support core functionalities such as:
              <ul>
                <li>Generating and deleting contracts.</li>
                <li>Transferring tokens and issuing staking rewards.</li>
              </ul>
            </li>
            <li>
              Implemented <strong>Wallet Connect Feature</strong>, allowing
              users to securely connect their MetaMask wallets to the dApp for
              signing smart contracts and performing transactions such as
              deposits and withdrawals.
            </li>
            <li>
              Gained hands-on experience with backend development and blockchain
              technologies despite having no prior knowledge, quickly learning{" "}
              <strong>Node.js and Express</strong> to fulfill project
              requirements.
            </li>
          </ul>

          <h6>Binary Tree (Genealogy Tree) Implementation</h6>
          <ul>
            <li>
              Implemented a complex <strong>binary referral tree system</strong>
              , enabling users to invite others using referral codes, with a
              structure where each user could have one left and one right
              partner.
            </li>
            <li>
              Developed an asynchronous, recursive function{" "}
              <strong>(createBinaryTree)</strong>
              to dynamically build the tree using minimal data from the backend,
              efficiently fetching partner information from the blockchain via
              ethers.js and smart contracts written in Solidity.
              <li>
                The function handled the following key operations:
                <ul>
                  <li>
                    Asynchronous retrieval of partner data for dynamic node
                    generation.
                  </li>
                  <li>
                    Recursive tree expansion to account for new referrals.
                  </li>
                  <li>
                    Proper handling of empty positions and tree structure
                    integrity.
                  </li>
                </ul>
              </li>
            </li>
          </ul>

          <h6>Staking and Reward Issuance Features:</h6>
          <ul>
            <li>
              Integrated a <strong>staking feature</strong>, allowing users to
              stake the platform's native token and receive rewards based on the
              staking amount and duration.
            </li>
            <li>
              Developed mechanisms to interact with smart contracts for managing
              staking transactions and calculating rewards distribution.
            </li>
            <li>
              Implemented an automated <strong>reward issuance system</strong>,
              triggering rewards when users joined via referral codes, deposited
              tokens, or performed staking actions, ensuring seamless blockchain
              interactions via the API.
            </li>
          </ul>

          <h6>Performance Optimization and Best Practices:</h6>
          <ul>
            <li>
              Applied best coding practices such as
              <strong>
                {" "}
                Separation of Concerns (SoC), DRY (Don't Repeat Yourself), and
                reusability
              </strong>
              , ensuring scalability and maintainability.
            </li>
            <li>
              Structured the new codebase using a feature-based folder
              structure, to improve maintainability.
            </li>
            <li>
              Optimized API calls and caching mechanisms to reduce redundant
              blockchain requests, improving response times and enhancing
              application efficiency.
            </li>
          </ul>

          <h6>Collaboration and Agile Development:</h6>
          <ul>
            <li>
              Worked in a highly collaborative environment, engaging with
              blockchain and backend(PHP) developers to ensure smooth
              integration of smart contracts and APIs.
            </li>
            <li>
              Participated in agile processes, utilizing Trello for task
              management and sprint planning while following Git-based workflows
              for version control, including structured merge requests and code
              reviews.
            </li>
          </ul>
        </div>
      </Animated>
    </Container>
  );
};

export default CorporateProjects;
