import React from 'react'
import Promotion from 'sicario/Promotion'

/** With a custom message: */
export default function ExamplePromotion() {
  return (
    <div>
      {promotions.map((props, index) => (
        <Promotion {...props} {...promotionAttr} key={`promotion-${index}`} index={index} />
      ))}
    </div>
  )
}

const promotionAttr = {
  title: {
    titleSizes: [8],
    titleColor: '#ea9a4c',
    bold: 'normal',
    titlePbs: [1],
  },
  description: {
    descriptionSizes: [2],
    descriptionColor: 'black',
    bold: 'normal',
    descriptionPbs: [1],
  },
}

const promotions = [
  {
    image: 'http://via.placeholder.com/400x300',
    titleText: 'RUN\nAND FLY',
    descriptionText:
      '가파르지 않은 경사면을 조금 뛰어 내려가면 글라이더에 공기가 차며 여러분과 파일럿을 가볍게 공중으로 띄워줍니다. 착륙 바로 전, 꼿꼿한 자세를 취하게 되며 곧 부드럽게 발을 디디게 됩니다. 비행이 종료되는 착륙장은 인터라켄의 중앙 잔디 밭 입니다.',
  },
  {
    image: 'http://via.placeholder.com/400x300',
    titleText: 'SAFE\nTHRILLER',
    descriptionText:
      '스카이윙즈의 모든 파일럿들은 SHPA(스위스 행글라이딩, 패러글라이딩 협회)에서 공식적으로 검증 받았으며 고난이도의 훈련을 통과하였습니다. 다년간의 비행 경험을 통한 노하우와 비행스킬로 정평나있습니다. 이는 자사의 안전성과 전문성이 최상위의 평가를 받는 이유입니다.',
  },
]
