/***************************** 공통 이벤트 *****************************/
//  TODO UniWebView 닫기 버튼
const onClickCloseWevView = () => {
  // 유니티 UniWebView 콜백
  window.location.href = 'uniwebview://close'
}
const closeBtn = document.getElementById('closeButton')
if (closeBtn) {
  closeBtn.addEventListener('click', onClickCloseWevView)
}

/***************************** noticeDetail.html 파일 이벤트 *****************************/
// TODO notice.html 파일로 돌아가기 버튼 (더미)
const onClickBackBtn = () => {
  window.location.href = 'notice.html' // TODO 테스트를 위해 더미 작성
}
const backBtnTop = document.getElementById('backButton')
const backBtnBottom = document.getElementById('backButtonBottom')
if (backBtnTop) {
  backBtnTop.addEventListener('click', onClickBackBtn)
}
if (backBtnBottom) {
  backBtnBottom.addEventListener('click', onClickBackBtn)
}

/***************************** notice.html 파일 이벤트 *****************************/
// TODO dummyNotices 배열 = 공지사항 리스트 (더미)
/** 공지사항 타입 type
 * 1. 상단고정 'fixed-notice'
 * 2. 점검완료 'completed-notice'
 * 3. 일반 ''
 * */
/** 배지 출력 여부 visibleBadge */
const dummyNotices = [
  {
    id: 0,
    type: 'fixed-notice',
    title: '챔프포커 진행 이벤트 확인하는 방법',
    date: '23.12.01',
    visibleBadge: false,
  },
  {
    id: 1,
    type: '',
    title: '챔프포커 12월 1일 정기점검 사전안내',
    date: '23.12.01',
    visibleBadge: true,
  },
  {
    id: 2,
    type: 'completed-notice',
    title: '[점검완료] 12월 1일 챔프포커 정기점검 안내',
    date: '23.12.01',
    visibleBadge: false,
  },
  {
    id: 3,
    type: '',
    title: '공지사항 내용은 최대 20자, 공지사항 내용은 최대 20자, 공지사항 내용은 최대 20자, 공지사항 내용은 최대 20자, 공지사항 내용은 최대 20자,',
    date: '23.12.01',
    visibleBadge: false,
  },
  {
    id: 4,
    type: '',
    title: '일반공지사항',
    date: '23.12.01',
    visibleBadge: false,
  },
  {
    id: 5,
    type: '',
    title: '일반공지사항',
    date: '23.12.01',
    visibleBadge: false,
  },
  {
    id: 6,
    type: '',
    title: '일반공지사항',
    date: '23.12.01',
    visibleBadge: false,
  },
  {
    id: 7,
    type: '',
    title: '일반공지사항',
    date: '23.12.01',
    visibleBadge: false,
  },
]

const onClickNoticeListItem = (event) => {
  const ele = event.target
  if (ele) {
    window.location.href = 'noticeDetail.html' // TODO 테스트를 위해 더미 작성
    // 기존에 작성되어있던 onClickNotice 이벤트
    // window.location.href = 'gameNoticeDetail?id=' + id
  }
}

const noticeListEle = document.getElementById('noticeList')

if (noticeListEle) {
  const ele = dummyNotices.map((notice) => `
    <li class="notice-list--item ${notice.type}">
      ${notice.visibleBadge ? '<span class="badge"></span>' : ''}
      <span class="notice-title">${notice.title}</span>
      <span class="notice-date">${notice.date}</span>
    </li>
  `).join('')


  // 공지사항 리스트 추가
  noticeListEle.insertAdjacentHTML('beforeend', ele)
  // 공지사항 리스트 클릭이벤트
  const list = noticeListEle.querySelectorAll('.notice-list--item')
  list.forEach(li => li.addEventListener('click', onClickNoticeListItem))

}
