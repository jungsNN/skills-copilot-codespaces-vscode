function skillsMembers() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/skills-members.html',
    scope: {
      members: '=',
      skills: '='
    },
    controller: function ($scope, $state, $stateParams, $ionicModal, $ionicPopup, $ionicLoading, $ionicScrollDelegate, $timeout, $ionicHistory, $translate, $rootScope, $ionicPopover, $ionicPlatform, $ionicActionSheet, $ionicBackdrop, $ionicSlideBoxDelegate, $ionicSideMenuDelegate, $ionicViewSwitcher, $ionicViewService, $ionicTabsDelegate, $ionicNavBarDelegate, $ionicListDelegate, $ionicSlideBoxDelegate, $ionicScrollDelegate, $ionicPopover, $ionicHistory, $ionicSlideBoxDelegate, $ionicLoading, $ionicModal, $ionicPopup, $ionicActionSheet, $ionicBackdrop, $ionicSideMenuDelegate, $ionicViewSwitcher, $ionicViewService, $ionicTabsDelegate, $ionicNavBarDelegate, $ionicListDelegate, $ionicScrollDelegate, $ionicPopover, $ionicHistory) {

      $scope.showModal = function (id) {
        $ionicModal.fromTemplateUrl('templates/modal-skills.html', {
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function (modal) {
          $scope.modal = modal;
          $scope.modal.show();
        });
      };

      $scope.closeModal = function () {
        $scope.modal.hide();
        $scope.modal.remove();
      };

    }
  };
}
