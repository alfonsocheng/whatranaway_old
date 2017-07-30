# rake batch_generate_cp_hashes[(1..2)]
# or rake batch_generate_cp_hashes[0..1]
task :batch_generate_cp_hashes, [:p_ids] do |task, args|
  abort("you must pass in some ids") if args[:p_ids].nil?
  # seems like a terrible idea to eval a user input
  eval(args[:p_ids]).each do |p_id|
    p "generating #{p_id}.rb"
    generate_cp_hash(p_id)
  end
end

def generate_cp_hash(p_id)
  File.open("lib/possible_ivs_by_cp/#{p_id}.rb", "w+") do |f|
    f.write("module Pokemon#{p_id}Constants\n")
    f.write("  CP_HASH = {\n")

    f.write("    2000 => [[1,2,3], [2,3,4], [3,4,5]]\n")

    f.write("  }\n")
    f.write("end\n")
  end
  # puts "Hello world #{p_id}"
end
