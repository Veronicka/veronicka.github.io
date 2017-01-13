/**
 * Created by Veronica on 11/01/2017.
 */

angular.module('myapp', []);

angular.module('myapp').factory('MyService', function () {
    var m = {
        aboutMe: "",
        moreMe: "",
        afterSchool: "",
        pyladiesVale: "",
        djangoGirls: "",
        pyladies: pyladies,
        django: django,
        me: me,
        more:more,
        about: about
    };

    function django(){
        m.djangoGirls = "Django Girls is a non-profit organization and a community that empowers and helps " +
            "women to organize free, one-day programming workshops by providing tools, resources and support. " +
            "Volunteer run organization with hundreds of people contributing to bring more amazing women into the " +
            "world of technology. Making technology more approachable by creating resources designed with empathy.";
    };

    function pyladies(){
        m.pyladiesVale = "PyLadies Vale is a subgroup Pyladies. PyLadies is a International mentorship group with a focus on helping more women become active " +
            "participants and leaders in the Python open-source community. Our mission is to promote, " +
            "educate and advance a diverse Python community through outreach, education, " +
            "conferences, events and social gatherings.";
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
        $scope.m.pyladies();
        $scope.m.django();
    }

    init();
});