cmd_Release/hey.node := ./gyp-mac-tool flock ./Release/linker.lock g++ -bundle -Wl,-search_paths_first -mmacosx-version-min=10.5 -arch x86_64 -L./Release  -o Release/hey.node Release/obj.target/hey/src/hey.o -undefined dynamic_lookup