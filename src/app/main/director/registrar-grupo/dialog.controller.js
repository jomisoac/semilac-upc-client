function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        answer = $scope.selectedUser();
        $mdDialog.hide(answer);
    };
    $scope.contacts = [
        {
            'id': 1,
            'fullName': 'Maria Guadalupe',
            'lastName': 'Guadalupe',
            'title': "CEO, Found"
        },
        {
            'id': 2,
            'fullName': 'Gabriel García Marquéz',
            'lastName': 'Marquéz',
            'title': "VP Sales & Marketing"
        },
        {
            'id': 3,
            'fullName': 'Miguel de Cervantes',
            'lastName': 'Cervantes',
            'title': "Manager, Operations"
        },
        {
            'id': 4,
            'fullName': 'Pacorro de Castel',
            'lastName': 'Castel',
            'title': "Security"
        }
    ];
    $scope.selectedIndex = 2;
    $scope.selectedUser = function () {
        return $scope.contacts[$scope.selectedIndex - 1].lastName;
    }
}