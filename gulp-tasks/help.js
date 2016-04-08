module.exports = function () {
    return function () {
      console.log();
      console.log($.util.colors.red("EDM BUILDER HELP"));
      console.log();
      console.log($.util.colors.green("   Usage: gulp { command }"));
      console.log();
      console.log($.util.colors.green("   help:    ") + "Displays this help text.");
      console.log($.util.colors.green("   build:   ") + "Runs the eDM builder, allowing you to select a pre built template to build your eDM.");
      console.log($.util.colors.green("   run:     ") + "Sets up a local server to view the eDM and compiles and watches the files.");
      console.log($.util.colors.green("   test:    ") + "Asks for a subject, uploads files to S3 and sends a test of the email to Litmus.");
      console.log();
    };
};
