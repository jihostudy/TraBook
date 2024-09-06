import React, { ReactNode } from 'react'

import Contents from '@/components/main/Contents'
import LucideIcon from '@/lib/icons/LucideIcon'
import { PlanRegionType } from '@/lib/types/Entity/plan'
import DummyThumbNail from '@/public/dummy/dummy_plan_thumbnail.png'

interface MainStorePlanPageProps {}

// Todo: 실제 데이터 Fetch하여 사용하기
const dummy_plan = {
  id: 1,
  title: '가족 여행',
  description: '아들 전역 기념 여행',
  region: '제주도' as PlanRegionType,
  likes: 30,
  comments: 3,
  scraps: 15,
  schedule: '24.04.20~24.04.23',
  imageSrc: DummyThumbNail,
  isFinished: true,
}
const dummy_plan2 = {
  id: 1,
  title: '가족 여행',
  description: '아들 전역 기념 여행',
  region: '제주도' as PlanRegionType,
  likes: 32,
  comments: 3,
  scraps: 15,
  schedule: '24.04.20~24.04.23',
  imageSrc: DummyThumbNail,
  isFinished: true,
}

const dummy_plans1 = new Array(5).fill({
  ...dummy_plan,
})
const dummy_plans2 = new Array(5).fill({
  ...dummy_plan2,
})
const dummy_plans = [...dummy_plans1, ...dummy_plans2]

const MainStorePlanPage = ({}: MainStorePlanPageProps): ReactNode => {
  return (
    <div className='relative flex h-min min-h-screen-header flex-grow flex-col items-start justify-start gap-2 bg-white px-6 md:px-10'>
      <p className='flex h-[10dvh] min-h-[60px] w-full items-end pl-1 text-3xl font-semibold xl:text-4xl'>
        보관함
        <LucideIcon name='ChevronRight' size={36} />
        여행 계획
      </p>

      <Contents name='Plan' datas={dummy_plans} />
    </div>
  )
}

export default MainStorePlanPage
