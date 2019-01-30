import React from 'react'
import { image } from './image.reducer'
import { IMAGE } from '../constants'

const imageFetchMock = [
    {
        id: 0,
        name: "A.jpeg",
        timestamp: {
            seconds: 1548900000
        },
        url: "https://picsum.photos/200/300"
    },
    {
        id: 1,
        name: "B.jpeg",
        timestamp: {
            seconds: 1548800000
        },
        url: "https://picsum.photos/300/400"
    },
    {
        id: 2,
        name: "C.jpeg",
        timestamp: {
            seconds: 1548700000
        },
        url: "https://picsum.photos/400/500"
    }
]

describe('Image Reducer', () => {
    it('should return initial state', () => {
        expect(
            image(undefined, {})
        ).toEqual(
            {
                imageRef: {}
            }
        )
    });

    it('should open slideshow on currentViewIndex and update imageRef on IMAGE.VIEW_IMAGE', () => {
        expect(
            image(
                { imageRef: {} },
                {
                    type: IMAGE.VIEW_IMAGE,
                    payload: {
                        imageRef: imageFetchMock,
                        currentViewIndex: 0
                    }
                }
            )
        ).toEqual({
            imageRef: imageFetchMock,
            currentViewIndex: 0
        })
    })
    
})