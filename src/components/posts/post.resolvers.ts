import { Args, Query, Resolver } from '@nestjs/graphql'
import { PostModel } from './interface/post.model'
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
@Resolver((of) => PostModel)
export class PostsResolver {
  constructor(private readonly http: HttpService) {}

  
  @Query(() => [PostModel], { name: 'posts', nullable:true})
   getPosts() {
    const posts = this.http.get('http://127.0.0.1:1337/api/posts')
    return posts.pipe(map((res) => {
      const postsList = []
      res.data.data.forEach((item) => {
        item.attributes['id'] = item.id
        console.log(item.attributes)
        postsList.push(item.attributes)
      })
      

      return postsList
    }))
    // return posts.data
  }
}