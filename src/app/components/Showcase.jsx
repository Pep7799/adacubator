import styled from 'styled-components'

const Showcase = () => {
  return (
    <ShowcaseCont>
      <h2 data-aos='zoom-in'>
            Let&ldquo;s <span className='waivy'>Accelerate</span> Your Success <br/>on <span className='waivy'>Cardano</span>
        </h2>
        <p data-aos='fade-up'>For inquiries, partnership opportunities, or to submit your project for consideration<br/>please contact us at <a className='waivy' href='mailto:info@aducubator.com'>info@aducubator.com</a></p>
        <div className='circle'></div>
    </ShowcaseCont>
  )
}

export default Showcase

const ShowcaseCont = styled.div`
  position: relative;
  text-align: center;
  min-height: 400px;
  margin: 8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
  }
  a {
    color: #0098DA;
  }
  .circle {
    left: 90%;
    filter: blur(300px);
    width: 600px;
  }

`