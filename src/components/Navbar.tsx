import React from "react";

const Navbar = ({
    handleAboutMeClick,
    handleMySkillsClick,
    handleContactClick,
    handleMyProjectsClick,
}) => {
    const handleAboutClick = () => {
        handleAboutMeClick();
    };
    const handleSkillClick = () => {
        handleMySkillsClick();
    };
    const handleProjectsClick = () => {
        handleMyProjectsClick();
    };
    const contactClick = () => {
        handleContactClick();
    };

    return (
        <div className="flex justify-center">
            <div className="container mx-auto flex justify-between items-center py-5">
                <div className="flex items-center">
                    <img
                        src="./images/logo.png"
                        alt="Logo"
                        className="mr-10 h-12"
                    />
                    <ul className="flex gap-5 list-none mx-auto ">
                        <li
                            className="cursor-pointer"
                            onClick={handleAboutClick}
                        >
                            About
                        </li>
                        <li
                            className="cursor-pointer"
                            onClick={handleSkillClick}
                        >
                            Tech
                        </li>
                        <li
                            className="cursor-pointer"
                            onClick={handleProjectsClick}
                        >
                            My Projects
                        </li>
                        {/* <li>Contact</li> */}
                    </ul>
                </div>
                <div className="md:flex items-center hidden">
                    <button
                        className="cursor-pointer mx-2 px-4 py-2 bg-red-600 rounded-lg text-white transition duration-300 hover:bg-red-800"
                        onClick={contactClick}
                    >
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
