cmd_Release/callback_howmie.node := ./gyp-mac-tool flock ./Release/linker.lock g++ -bundle -Wl,-search_paths_first -mmacosx-version-min=10.5 -arch x86_64 -L./Release  -o Release/callback_howmie.node Release/obj.target/callback_howmie/src/callback_howmie.o -undefined dynamic_lookup
