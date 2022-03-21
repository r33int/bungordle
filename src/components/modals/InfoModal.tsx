import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="Z" />
        <Cell value="A" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="present"
        />
        <Cell value="I" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter F is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="U" />
        <Cell value="P" />
        <Cell isRevealing={true} isCompleted={true} value="I" status="absent" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter I is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/r33int/bungordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
