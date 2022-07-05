import styled from "styled-components"

interface ModalProps {
    width?: string,
    height?: string,
    children?: React.ReactFragment,
    seeModal?: boolean,
    setSeeModal?: (state: boolean) => void
}

const Modal = ({ width = "400px", height = "400px", children = <></>, seeModal = false, setSeeModal = () => { } }: ModalProps) => {
    return (
        <>
            <ContainerModal width={width} height={height} seeModal={seeModal} onClick={() => setSeeModal(false)} />
            <ModalBody width={width} height={height} seeModal={seeModal}>
                <div className="close_tab" onClick={()=>setSeeModal(false)}><span>x</span></div>
                {children}
            </ModalBody>
        </>
    )
}

const ContainerModal = styled.div<ModalProps>`
    width:100%;
    height:100%;
    background:rgba(0,0,0, 0.3);
    position: fixed;
    left: 0;
    top:0;
    z-index: 1000;
    display: ${({ seeModal }) => seeModal ? 'block' : 'none'};

`

const ModalBody = styled.div<ModalProps>`
        background: #fff;
        height: ${({ height }) => height};
        width: ${({ width }) => width};
        position: fixed;
        top:${({ height }) => `calc(100%/2 - ${height ? parseInt(height?.substring(0, height.length - 2)) / 2 : 0}px)`};
        left: ${({ width }) => `calc(100%/2 - ${width ? parseInt(width?.substring(0, width.length - 2)) / 2 : 0}px)`};
        border-radius: 15px;
        z-index:2000;
        display: ${({ seeModal }) => seeModal ? 'block' : 'none'};

        .close_tab{
        position: absolute;
        right: 15px;
        top:10px;
        width:30px;
        height: 30px;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: stretch;
        border-radius: 100%;
        color:#fff;
        background: var(--primary);
        cursor: pointer;
    }
`

export default Modal
