import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
import { Input, TagLabel, Text, Textarea, Button } from '@chakra-ui/react'
import ThemeContext from '../../Context/Context'

function Left() {

  const [head, setHead] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("")
  const { infs, setInfs } = useContext(ThemeContext)

  return (
    <div className={styles.left}>
      <Text fontSize={"4xl"} fontWeight="semibold" color={"white"}>Details</Text>
      <div>
        <label>
          Your note header
        </label>
        <Input mt={"2"} onChange={(e) => {
          setHead(e.target.value)
        }} mb="2" size={"md"} value={head} paddingInline={"3"} boxShadow="md" paddingBlock={"3.5"} textColor="black" placeholder={"Type Note Head"} bgColor="white" />
        <label>
          Your note category
        </label>
        <Input mt={"2"} mb="2" size={"md"} value={category} onChange={(e) => {
          setCategory(e.target.value)
        }} paddingInline={"3"} boxShadow="md" paddingBlock={"3.5"} textColor="black" placeholder={"Type Note Category"} bgColor="white" />
        <label>
          Write anything
        </label>
        <Textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' value={content} onChange={(e) => {
          setContent(e.target.value)
        }} size={"md"} paddingInline={"3"} paddingBlock={"3.5"} textColor="black" bgColor={"white"} boxShadow={"md"} mt="2"></Textarea>
        <Button float={"right"} mt="5" px={"5"} colorScheme="orange" size='md' onClick={() => {
          setInfs([...infs, { head: head, category: category, content: content }])
        }}>
          Save
        </Button>
        <Button float={"right"} mt="5" mr={"3"} px={"5"} colorScheme="orange" size='md' onClick={() => {
          setHead("")
          setCategory("")
          setContent("")
        }}>
          Reset
        </Button>
      </div>
    </div>
  )
}

export default Left
