/**
 * Created by Veronica on 11/01/2017.
 */

angular.module('myapp', []);

angular.module('myapp').factory('MyService', function () {
    var m = {
        aboutMe: "",
        moreMe: "",
        afterSchool: "",
        me: me,
        more:more,
        about: about
    };

    function me(){
        m.aboutMe="I am a brazilian System Analysis and Development Technologist, graduated from FATEC" +
            " Jessen Vidal in São José dos Campos. I also have a certificate in Computer " +
            "Networking from ETEC Cônego Jose Bento in Jacareí.";


    };

    function more(){
        m.moreMe="I worked as a intern at Brazilian Institute for Space Research (INPE) where I was responsible" +
            " for maintaining the systems of the Associated Plasma Laboratory. During my internship I " +
            "got scholarships from a undergraduate research program in INPE,  where I developed a " +
            "computer program to test and validate a software to be implemented in the interface sub-module " +
            "of the ELISA (Electrostatic Energy Analyzer) experiment.";
    };

    function about(){
        m.afterSchool="After finishing the undergraduate course, I worked at Jetsoft developing a software to automate " +
            "the sale and purchase of parking spaces.";
    }

    return m;
});

angular.module('myapp').controller('MyCtrl', function ($scope, MyService){
    $scope.m = MyService;

    function init(){
        $scope.m.me();
        $scope.m.more();
        $scope.m.about();
    }

    init();
});