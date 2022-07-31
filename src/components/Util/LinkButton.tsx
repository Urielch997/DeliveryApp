import styled from 'styled-components'

const LinkButton = ({linked = "",text = "",Icon = <></>, classButton = "",color = ""}) => {
  return (
    <Link href={linked} className={classButton} style={{background:color}}>
        {Icon}
    {text}</Link>
  )
}

const Link = styled.a`
    width: 100%;
    padding: 10px 5px;
    margin:0px auto;
    background: var(--primary);
    border: 0;
    cursor:pointer;
    font-weight: 700;
    display: flex;
    justify-content: center;
`

export default LinkButton