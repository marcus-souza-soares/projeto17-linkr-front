import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "../../contexts/auth";

export default function Logout() {
    const { userData, logout } = useAuth();
    const [animation, setAnimation] = useState("");

    function handleClickAnimation() {
        if (animation === "close" || animation === "") {
            setAnimation("open");
        } else {
            setAnimation("close");
        }
        console.log(animation);
    }

    return (
        <>
            <Container status={animation}>
                <div className="menu">
                    <AiOutlineDown
                        className={`logout-icon ${animation}`}
                        onClick={handleClickAnimation}
                    />
                    <img
                        onClick={handleClickAnimation}
                        src={!!userData ? userData.image : ""}
                        alt={!!userData ? userData.image : ""}
                    />
                </div>
                <h2 onClick={logout}>Logout</h2>
            </Container>
            <Overlay status={animation} onClick={() => setAnimation("close")}/>
        </>
    );
}
const Container = styled.div`
    background: #151515;
    height: ${(props) =>
        props.status === "" || props.status === "close"
            ? "100%"
            : "calc(100% + 50px)"};
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-bottom-left-radius: 10px;
    z-index: 1;
    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: auto;
        color: #ffffff;
    }
    div > img {
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .logout-icon {
        cursor: pointer;
        margin-right: 10px;
    }
    .open {
        animation: for-up 0.6s forwards;
    }
    .close {
        animation: for-down 0.6s forwards;
    }
    h2 {
        cursor: pointer;
        display: ${(props) =>
        props.status === "" || props.status === "close" ? "none" : "block"};
        font-family: "Lato", sans-serif;
        font-weight: 700;
        font-size: 17px;
        color: #ffffff;
    }
    @keyframes for-up {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(180deg);
        }
    }
    @keyframes for-down {
        from {
            transform: rotate(180deg);
        }
        to {
            transform: rotate(0);
        }
    }
`;
const Overlay = styled.div`
    background: transparent;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: ${(props) =>
        props.status === "" || props.status === "close" ? "none" : "block"};
    z-index: 0;
`;
