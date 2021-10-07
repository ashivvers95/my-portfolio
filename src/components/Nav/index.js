import React from 'react';

function Nav() {

    const featuredApplications = [
        {
          name: "FATE",
          description:
            "A group project, developed while in the coding boot camp. Fascinating Astrological Tarot Experience.",
        },
        { name: "Safer-Sale", 
        description: "A group project, developed while in the coding boot camp. A safer way to sell and buy online, allows buyer and seller to agree and select a safe location in which to conduct their exchange" },
        { name: "Arena Bar", 
        description: "In progress" }
      ];

    return (
        <header>
              <nav>
    <ul>
      <li>
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {featuredApplications.map((featuredApplication) => (
        <li
          className="mx-1"
          key={featuredApplication.name}
        >
          <span>
            {featuredApplication.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
        </header>
    );
}

export default Nav;