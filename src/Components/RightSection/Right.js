import React, { useContext } from 'react'
import styles from './styles.module.css'
import { Text } from '@chakra-ui/react'
import ThemeContext from '../../Context/Context'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function Right() {

  const { infs, setInfs } = useContext(ThemeContext)

  return (
    <div className={styles.right}>
      <Text fontSize={"4xl"} fontWeight={"semibold"} color={"white"}>Notes</Text>
      <ul>
        {
          infs.map((item, index) => {
            return (
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem backgroundColor={"white"} borderRadius={"md"} mb={"2"} mt={"2"}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" alignItems={"center"} flex='1' textAlign='left' fontWeight={"semibold"}>
                        {index + 1} - {item.head}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {item.content}
                    <span id={styles.category}>
                      Category - {item.category}
                    </span>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Right
