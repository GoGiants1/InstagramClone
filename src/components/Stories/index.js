import React from 'react'
import {View, FlatList} from 'react-native'
import Story from  '../Story'
const data = [
    {
        imageUri:'https://avatars.githubusercontent.com/u/69342392?s=400&u=5f00d9ea3cb8d134035a30cf78ca0e9a29f6e522&v=4',
        name:'Rumi'
    },
    {
        imageUri:'https://images.generated.photos/opEApikic1YvFSaK4oC5-KnbYLlJUw1ya5-eNhsVrmY/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4MDU0MzAuanBn.jpg',
        name:'Alice'
    },{
        imageUri:'https://images.generated.photos/zhXCB0u_CHcN1kVM1NRAJTfpGp-8HRpfi4eXE3Qe2D8/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzMDgxNzUuanBn.jpg',
        name:'Caroline'
    },{
        imageUri:'https://images.generated.photos/RmAkWhxwSY79aQjjrM_DVRnPzF22Q_3Aab62k42rqd0/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2NDQ3NzkuanBn.jpg',
        name:'Roxanne'
    },

]


const Stories = () => (
    <FlatList
        data={data}
        keyExtractor= {(name) => name}
        horizontal
        renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
    />
)

export default Stories;
