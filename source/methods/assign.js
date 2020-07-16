function assign() {
    console.log('arguments', arguments)
    var args = core.arguments2array(arguments);
    console.log('args', args)
    if (args.length) {
        return args;
    }
    return {};
}