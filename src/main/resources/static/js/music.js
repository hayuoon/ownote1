$(document).ready(function () {
    $('.delete-link').click(function (e) {
        e.preventDefault(); // 기본 링크 동작을 막습니다.

        let musiccontest_id = $(this).data('musiccontest_id');
        console.log(musiccontest_id);

        // 확인 대화 상자 표시
        var confirmResult = confirm('게시글을 삭제하시겠습니까?');

        if (confirmResult) {
            // 사용자가 확인을 누른 경우에만 Ajax 요청을 보냅니다.
            $.ajax({
                type: 'GET', // 또는 'GET' 요청 방식
                url: '/musicContest/delete', // 컨트롤러의 URL을 적어주세요.
                data: { musiccontest_id: musiccontest_id }, // 컨트롤러로 전달할 데이터
                success: function (data) {
                    console.log(data);
                    // 성공적으로 처리한 후의 동작
                    window.location.href = '/musicContest/list';
                    alert('게시글이 삭제되었습니다.');
                },
                error: function (x) {
                    console.log(x);
                    // 오류 발생 시 처리
                    alert('게시글 삭제 중 오류가 발생했습니다.');
                }
            });
        }
    });
});
function aa(aa) {
    console.log(aa);
// 값을 가져오기 위해 .val() 메서드 사용
    // 확인 대화 상자 표시
    var confirmResult = confirm('삭제하시겠습니까?');

    if (confirmResult) {
        // 사용자가 확인을 누른 경우에만 Ajax 요청을 보냅니다.
        $.ajax({
            type: 'POST',
            url: '/club/delete', // 수정 처리를 수행하는 컨트롤러의 URL을 적어야 합니다.
            data: {
                clubboard_id: clubboard_id
            },

            success: function (data) {
                // 수정 성공 시 처리
                // data에 컨트롤러에서 반환한 결과가 들어옵니다.
                // 원하는 방식으로 결과를 처리합니다.

                alert('삭제가 완료되었습니다.');
                window.location.href = "/club/list";
            },
            error: function () {
                // 오류 발생 시 처리
                alert('오류가 발생했습니다.');
            }
        });
    }
}