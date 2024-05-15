import { IPost } from 'shared/interface'
import { create } from 'zustand'
const initialState = {
  posts: null
}

type ClassType = {
  posts: IPost[] | null
  setPosts: (posts: IPost[] | null) => void
  restore: () => void
}

const useVariable = create<ClassType>((set) => ({
  posts: null,
  setPosts: (posts: IPost[] | null) => set(() => ({ posts })),

  restore: () => set({ ...initialState })
}))

export default useVariable
