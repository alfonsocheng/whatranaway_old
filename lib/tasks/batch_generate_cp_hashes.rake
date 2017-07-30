# this rake task is used to generate ruby constants
# usage example
# rake batch_generate_cp_hashes[(1..2)]
# or rake batch_generate_cp_hashes[0..1]
require "#{Rails.root}/app/helpers/cp_helper"
include CpHelper # MAX_WILD_LEVEL, BASE_STATS and LEVEL_MULTIPLIER constants come from here
task :batch_generate_cp_hashes, [:p_ids] do |task, args|
  abort("you must pass in some ids") if args[:p_ids].nil?
  # seems like a terrible idea to eval a user input
  eval(args[:p_ids]).each do |p_id|
    p "generating #{p_id}.rb"
    generate_cp_hash(p_id)
  end
end

def generate_cp_hash(p_id)
  p "generating cp possibilities"
  # MAX_WILD_LEVEL = 30
  base_stats = BASE_STATS[p_id] || [0, 0, 0]
  ivs_by_cp = {}
  (1..MAX_WILD_LEVEL).each do |i|
    (0..15).each do |s_iv|
      (0..15).each do |a_iv|
        (0..15).each do |d_iv|
          cp = cp_calculator(i, base_stats[0] + s_iv, base_stats[1] + a_iv, base_stats[2] + d_iv)
          if ivs_by_cp[cp].present?
            ivs_by_cp[cp] << [s_iv, a_iv, d_iv]
          else
            ivs_by_cp[cp] = [[s_iv, a_iv, d_iv]]
          end
        end
      end
    end
  end
  debugger
  File.open("lib/possible_ivs_by_cp/#{p_id}.rb", "w+") do |f|
    f.write("module Pokemon#{p_id}Constants\n")
    f.write("  IVS_BY_CP = {\n")

    f.write("    2000 => [[1,2,3], [2,3,4], [3,4,5]]\n")

    f.write("  }\n")
    f.write("end\n")
  end
end

def cp_calculator(level, s, a, d)
  cp = (a * s ** 0.5 * d **0.5 * LEVEL_MULTIPLIER[level] * LEVEL_MULTIPLIER[level] / 10).round
  cp > 10 ? cp : 10
end
