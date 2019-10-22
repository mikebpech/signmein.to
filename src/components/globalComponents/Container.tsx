import styled from 'styled-components';

export const OfflineContainer = styled.div`
    width: 100%;
    height: calc(100% - 56px);

    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
`

export const Boxes = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none !important;
        color: inherit !important;

        &:visited {
            text-decoration: none !important;
            color: inherit !important;
        }
    }

    .box {
        border-radius: 4px !important;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
        width: 400px;
        height: 250px;
        padding: 20px;
        margin: 0 10px;
        background: #fff;
        cursor: pointer;

        &:hover {
            background-color: #F9FAFA !important;
        }

        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 100px;
            height: 100px;
        }

        h2 {
            margin-top: 20px;
            font-family: "Karla";
        }

        p {
            text-align: center;
            padding: 0 20px;
            color: #637381;
            font-size: 17px;
        }
    }
`