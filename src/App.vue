<template>
    <u-comment :config="config" page @submit="submit" @like="like" @reply-page="replyPage">
        <!-- <template #info>用户信息卡槽</template> -->
        <!-- <template #card>用户信息卡片卡槽</template> -->
    </u-comment>

</template>

<script lang="ts" setup>
import emoji from '@/assets/emoji'
import { reactive } from 'vue'
import { CommentApi, ConfigApi, SubmitParamApi, UToast, createObjectURL,ReplyApi, usePage, ReplyPageParamApi } from 'undraw-ui'


const props = defineProps({
    commentsList: Object,
    repliesList: Object,
});

let testConfig = {
    user: {
        id: 1,
        username: 'jack',
        avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
        // 评论id数组 建议:存储方式用户uid和评论id组成关系,根据用户uid来获取对应点赞评论id,然后加入到数组中返回
        likeIds: [1, 2, 3]
    },
    emoji: emoji,
    comments: [],
    total: 10
}

const config = reactive<ConfigApi>(testConfig)

let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, files, finish }: SubmitParamApi) => {
    console.log('提交评论: ' + content, parentId, files)
    console.log( parentId)

    /**
     * 上传文件后端返回图片访问地址，格式以'||'为分割; 如:  '/static/img/program.gif||/static/img/normal.webp'
     */
        // let contentImg = files.map(e => createObjectURL(e)).join('||')

    const comment: CommentApi = {
            id: String((temp_id += 1)),
            parentId: parentId,
            uid: config.user.id,
            address: '来自江苏',
            content: content,
            likes: 0,
            createTime: '1分钟前',
            // contentImg: contentImg,
            user: {
                username: config.user.username,
                avatar: config.user.avatar,
                level: 6,
                homeLink: `/${(temp_id += 1)}`
            },
            reply: null
        }
    setTimeout(() => {
        finish(comment)
        UToast({ message: '评论成功!', type: 'info' })
    }, 200)
}
// 点赞按钮事件 将评论id返回后端判断是否点赞，然后在处理点赞状态
const like = (id: string, finish: () => void) => {
    console.log('点赞: ' + id)
    setTimeout(() => {
        finish()
    }, 200)
}

const replyPage = ({ parentId, pageNum, pageSize, finish }: ReplyPageParamApi) => {
    let tmp = {
        total: reply.total,
        list: usePage(pageNum, pageSize, reply.list)
    }
    setTimeout(() => {
        finish(tmp)
    }, 200)
}



const reply = {
    total: 7,
    list: [
        {
            id: '31',
            parentId: '1',
            uid: '6',
            address: '来自成都',
            content: '人生就像愤怒的小鸟，当你失败时，总有几只猪在笑。',
            likes: 7,
            createTime: '1天前',
            user: {
                username: '陆呈洋',
                avatar:
                    'https://static.juzicon.com/avatars/avatar-20220310090547-fxvx.jpeg?x-oss-process=image/resize,m_fill,w_100,h_100',
                level: 4,
                homeLink: '/31'
            }
        },
        {
            id: '32',
            parentId: '1',
            uid: '7',
            address: '来自杭州',
            content: '深思熟虑的结果往往就是说不清楚。',
            likes: 3,
            createTime: '2天前',
            user: {
                username: '哑谜',
                avatar:
                    'https://static.juzicon.com/avatars/avatar-190919180152-2VDE.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
                level: 3,
                homeLink: '/32'
            }
        },
        {
            id: '33',
            parentId: '1',
            uid: '8',
            level: 2,
            address: '来自深圳',
            content: '当我跨过沉沦的一切，向着永恒开战的时候，你是我的军旗。',
            createTime: '5天前',
            user: {
                username: 'Mia',
                avatar:
                    'https://static.juzicon.com/avatars/avatar-190919181554-L2ZO.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
                likes: 3,
                homeLink: '/33'
            }
        },
        {
            id: '34',
            parentId: '1',
            uid: '9',
            address: '来自西安',
            likes: 34,
            content: '不要由于别人不能成为我们所希望的人而愤怒，因为我们自己也难以成为自己所希望的人。',
            createTime: '1天前',
            user: {
                username: 'poli301',
                avatar:
                    'https://static.juzicon.com/avatars/avatar-190919180043-XPLP.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
                level: 4,
                homeLink: '/34'
            }
        },
        {
            id: '35',
            parentId: '1',
            uid: '10',
            username: 'fish_eno',
            avatar:
                'https://static.juzicon.com/avatars/avatar-190919180320-NAQJ.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
            level: 6,
            link: '/35',
            likes: 32,
            address: '来自武汉',
            content: '世上莫名其妙走霉运的人多的是，都是一边为命运生气，一边化愤怒为力量地活着。',
            createTime: '11小时前'
        },
        {
            id: '36',
            parentId: '1',
            uid: '11',
            likes: 21,
            address: '来自上海',
            content: '这世上所有的不利情况，都是当事者能力不足造成的',
            createTime: '10小时前',
            user: {
                username: '十三',
                avatar:
                    'https://static.juzicon.com/user/avatar-f103e42d-a5c9-4837-84e3-d10fad0bcb36-210108053135-E90E.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
                level: 4,
                homeLink: '/36'
            }
        },
        {
            id: '37',
            parentId: '1',
            uid: '12',
            likes: 18,
            address: '来自广州',
            content: ' 绝望自有绝望的力量，就像希望自有希望的无能。',
            createTime: '9小时前',
            user: {
                username: 'D.z.H****',
                avatar:
                    'https://static.juzicon.com/avatars/avatar-190919181051-M3HK.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
                level: 3,
                homeLink: '/37'
            }
        },
        {
            id: '38',
            parentId: '1',
            uid: '13',
            likes: 17,
            address: '来自重庆',
            content: ' 无论这个世界对你怎样，都请你一如既往的努力，勇敢，充满希望。',
            createTime: '8小时前',
            user: {
                username: '繁星Cong2',
                avatar:
                    'https://static.juzicon.com/user/avatar-f81b3655-03fd-485c-811b-4b5ceaca52b6-210817180051-YTO4.jpg?x-oss-process=image/resize,m_fill,w_100,h_100',
                level: 1,
                homeLink: '/38'
            }
        }
    ]
} as ReplyApi


config.comments = [
    {
        id: '1',
        parentId: null,
        uid: '1',
        address: '来自上海',
        content:
            '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
        likes: 2,
        contentImg: 'https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp',
        createTime: '1分钟前',
        user: {
            username: '落🤍尘',
            avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
            level: 6,
            homeLink: '/1'
        },
        reply:reply
    }
]

</script>

<style scoped lang="scss">



</style>
