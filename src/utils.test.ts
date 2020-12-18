import { getConfig, make2DArray } from './utils'

interface configI {
  rabbitMq: {
    id: string
    pw: string
    exchangeName: string
  }
}

describe('getConfig', function () {
  let config: configI
  beforeAll(() => {
    config = getConfig()
  })

  test('getConfig()를 이용해 설정을 가져올 수 있어야 합니다. ', () => {
    expect(typeof config).toBe('object')
  })

  it('getConfig()의 설정에는 다음과 같은 필드가 존재합니다.', () => {
    expect(config).toHaveProperty('rabbitMq')
    expect(config).toHaveProperty('zc')
    expect(config).toHaveProperty('bm')
    expect(config).toHaveProperty('adr')
  })
})

describe('make2DArray는 2차원 배열을 생성한다', () => {
  it('make2DArray의 반환값은 Array이다 ', () => {
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        const r = make2DArray(i, j)
        if (r !== false) {
          expect(r).toHaveLength(i)
          expect(r as any[][][0]).toHaveLength(j)
        } else {
          throw new Error('배열 생성 실패 ')
        }
      }
    }
  })

  describe('이뤄질 수 없는 경우 false을 리턴', () => {
    it('n < 1 ', () => {
      expect(make2DArray(1, 0)).toEqual(false)
      expect(make2DArray(0, 1)).toEqual(false)
    })
    it('n === falsely ', () => {})
  })
})
