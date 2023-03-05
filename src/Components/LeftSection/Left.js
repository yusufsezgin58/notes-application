import React from 'react'
import styles from './styles.module.css'
import { Input, TagLabel, Text, Textarea, Button } from '@chakra-ui/react'

function Left() {
  return (
    <div className={styles.left}>
      <Text fontSize={"4xl"} fontWeight="semibold" color={"white"}>Details</Text>
      <div>
        <label>
          Your note header
        </label>
        <Input mt={"2"} mb="2" size={"md"} paddingInline={"3"} boxShadow="md" paddingBlock={"3.5"} textColor="black" placeholder={"Type Note Head"} bgColor="white" />
        <label>
          Your note category
        </label>
        <Input mt={"2"} mb="2" size={"md"} paddingInline={"3"} boxShadow="md" paddingBlock={"3.5"} textColor="black" placeholder={"Type Note Category"} bgColor="white" />
        <label>
          Write anything
        </label>
        <Textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' size={"md"} paddingInline={"3"} paddingBlock={"3.5"} textColor="black" bgColor={"white"} boxShadow={"md"} mt="2"></Textarea>
        <Button float={"right"} mt="5" px={"5"} colorScheme="green" size='md'>
          Save
        </Button>
      </div>
    </div>
  )
}

export default Left
