'use client'

import { Arrow } from '@/components/icons/Arrow'
import { useEffect, useRef, useState, useTransition } from 'react'
import { ChatIcon } from '../icons/ChatIcon'
import { UserIcon } from '../icons/UserIcon'

const AiChat = () => {
  const [input, setInput] = useState<string>('')
  const [conversation, setConversation] = useState<{ question: string; answer: string }[]>([])
  const [isPending, startTransition] = useTransition()

  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [conversation])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!input.trim()) {
      return
    }

    setConversation(prev => [...prev, { question: input, answer: '...' }])

    startTransition(async () => {
      const abort = new AbortController()
      try {
        // @ts-expect-error - window.ai is the new experimental chrome API
        const chatSession = await window.ai.createTextSession()

        const response = await chatSession.prompt(input)

        setConversation(prev => {
          const newConversation = prev.slice()
          newConversation[newConversation.length - 1] = {
            question: input,
            answer:
              response === ''
                ? 'I am sorry, I do not understand what you mean. Please try again.'
                : response,
          }

          return newConversation
        })
      } catch (error) {
        abort.abort()
        setConversation(prev => {
          const newConversation = prev.slice()
          newConversation[newConversation.length - 1] = {
            question: input,
            answer: "I'm sorry, I couldn't understand that. Please try again.",
          }

          return newConversation
        })
      } finally {
        setInput('')
      }
    })
  }

  return (
    <>
      <section className='flex flex-col gap-y-4 w-full pb-20 md:pb-0'>
        {conversation.map((chat, index) => (
          <div key={index} className='flex flex-col w-full gap-y-6'>
            <div className='flex flex-row justify-end gap-2'>
              <p className='mt-10 py-5 px-5 border rounded-3xl rounded-tr-none'>{chat.question}</p>
              <UserIcon />
            </div>
            <div className='flex justify-start gap-2'>
              <ChatIcon />
              <p className='py-5 mt-10 px-5 border rounded-3xl rounded-tl-none'>{chat.answer}</p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </section>
      <section className='fixed bottom-0 w-full bg-background'>
        <form
          onSubmit={handleSubmit}
          className='px-4 md:px-14 mx-auto max-w-6xl mb-4 pt-1 lex-row h-fit gap-4 items-en w-full flex justify-center items-center'
        >
          <input
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Type your question here...'
            className='py-2 px-10 border rounded-full w-full h-14'
            disabled={isPending}
          />
          <button
            type='submit'
            disabled={isPending}
            className='text-white rounded-full flex items-center justify-center'
          >
            <Arrow />
          </button>
        </form>
      </section>
    </>
  )
}

export default AiChat
