import { Args, Query, Resolver } from '@nestjs/graphql'
import { PostModel } from './interface/post.model'

@Resolver((of) => PostModel)
export class PostsResolver {
  constructor() {}


  @Query(() => [PostModel], { name: 'posts', nullable:true})
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is no good'
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ]
  }
}