import styled from "styled-components"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"

const Container=styled.div`display:flex;`

export default function PostDetail() {
  return (
    <Container>
      <SinglePost/>
      <Sidebar/>
    </Container>
  )
}
